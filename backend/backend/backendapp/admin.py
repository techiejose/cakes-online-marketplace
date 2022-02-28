from django.contrib import admin

# Register your models here.
from .models import Product, Order, Customer


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name','description','category','price','photo1','photo2','photo3','dateposted')

admin.site.register(Product, ProductAdmin)

class OrderAdmin(admin.ModelAdmin):
    list_display = ('product','quantity','total','dateordered','mobile')

admin.site.register(Order, OrderAdmin)

class CustomerAdmin(admin.ModelAdmin):
    list_display = ('names','mobile','town','dateordered')

admin.site.register(Customer, CustomerAdmin)