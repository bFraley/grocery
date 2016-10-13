from django.db import models

class GroceryItem(models.Model):
    name = models.CharField(max_length=100)
    qty = models.IntegerField()
    # TODO: Make me a DecimalField!
    price = models.CharField(max_length=10)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name