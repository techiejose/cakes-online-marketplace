from rest_framework import serializers

from .models import Product, Customer, Order


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id','name','description','category','price','photo1','photo2','photo3','dateposted','count')
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id','names','mobile','town','dateordered')
class   OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id','product','quantity','total','dateordered','mobile')
