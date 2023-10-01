from django.db import models

# Create your models here.
class Video(models.Model):
    theme = models.CharField(max_length=255)
    description = models.CharField(max_length=255, blank=True)
    preview = models.ImageField(upload_to='preview/')
    video = models.FileField(upload_to='video/')
    profile_pic = models.ImageField(default=Null, upload_to="images/profile/")
    