from django.utils import timezone
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class AppUserManager(BaseUserManager):
    def _create_user(self, email, password, fullname, date_of_birth):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            fullname=fullname,
            date_of_birth=date_of_birth
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_user(self, email, password=None, fullname=None, date_of_birth=None):
        return self._create_user(email, password, fullname, date_of_birth)
    
    def create_superuser(self, email, password=None, fullname=None, date_of_birth=None):
        user = self.create_user(email, password, fullname, date_of_birth)
        user.is_staff = True
        user.is_admin = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class AppUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        max_length=255,
        unique=True,
    )
    fullname = models.CharField(max_length=255) 
    date_of_birth = models.DateField()
    start_date = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = AppUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["fullname", "date_of_birth"]

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
