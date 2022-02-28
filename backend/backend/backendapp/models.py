from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=120, null=True)
    description = models.TextField(null=True, blank=True)
    category = models.TextField(null=True, blank=True)
    price = models.IntegerField(max_length=120, null=True)
    photo1 = models.ImageField(null=True, blank=True, upload_to="images")
    photo2 = models.ImageField(null=True, blank=True, upload_to="images")
    photo3 = models.ImageField(null=True, blank=True, upload_to="images")
    dateposted = models.DateField(null=True)
    count = models.IntegerField(max_length=120,default=1)

    def _str_(self):
        return self.name

class Order(models.Model):
    product = models.CharField(max_length=120, null=True,blank=True)
    quantity = models.IntegerField(max_length=120, null=True, blank=True)
    total = models.IntegerField(max_length=120, null=True,blank=True)
    dateordered = models.DateField(null=True)
    mobile = models.IntegerField(max_length=120, null=True, blank=True)


    def _str_(self):
        return self.product

class Customer(models.Model):
    names = models.CharField(max_length=120, null=True,blank=True)
    mobile = models.IntegerField(max_length=120, null=True, blank=True)
    town = models.CharField(max_length=120, null=True, blank=True)
    dateordered = models.DateField(null=True)

    def _str_(self):
        return self.names