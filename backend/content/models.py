from django.db import models


# Create your models here.
class Card(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(
        upload_to='content/static/card/',
        null=True,
        blank=True)

    def image_tag(self):
        return f'<img src="content/static/card/{self.image}" width="150" height="150" />'

    image_tag.short_description = 'Image'


class Popup(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField(null=True, blank=True)
    published = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.name


from django import forms

class Room(models.Model):
    name = models.CharField(max_length=40)
    html1 = models.TextField()
    html2 = models.TextField()
    html3 = models.TextField()
    def __str__(self):
        return self.name