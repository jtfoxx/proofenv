from django.db import models
from django.contrib.auth.models import AbstractUser

ROLES = (("level1", "Level 1"), ("level2", "Level 2"),
         ("level3", "Level 3"), ("admin", "Admin"))


class Program(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(
        upload_to='images/programs', blank=True, null=True)
    role = models.CharField(max_length=50, blank=True)
    idx = models.IntegerField(blank=True, null=True, default=0)

    def __str__(self):
        return self.name


class Asset(models.Model):
    program = models.ForeignKey(Program, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, null=True)
    url = models.CharField("Vimeo ID only", max_length=150)
    assetType = models.CharField(max_length=50, default='audio',
                                 choices=(('audio', 'Audio'), ('video', 'Video')))
    description = models.CharField(max_length=1000, blank=True, null=True)
    day = models.IntegerField()
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    role = models.CharField(max_length=50, choices=ROLES)

    def __str__(self):
        return self.url

    class Meta:
        ordering = ["day"]


class User(AbstractUser):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=255)
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=50, blank=True, null=True)
    role = models.CharField(
        max_length=50,
        choices=ROLES,
        default="level1",
    )
    is_staff = models.BooleanField(blank=True, default=0)
    is_active = models.BooleanField(blank=True, default=1)
    # date_joined = models.DateTimeField(auto_now_add=True, blank=True)

    class Meta:
        db_table = "app_user"
        managed = False
