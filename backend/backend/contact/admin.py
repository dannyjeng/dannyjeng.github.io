from django.contrib import admin
from .models import Contact
from .forms import ContactForm

#class ContactAdmin(admin.ModelAdmin):
#    form = ContactForm
#
#    fields = ['name', 'email', 'message']

# Register your models here.
admin.site.register(Contact)#, ContactAdmin)
