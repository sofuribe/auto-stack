# Generated by Django 4.0.3 on 2023-03-07 19:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_alter_sale_customer_name_alter_sale_salesperson'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customername',
            name='phone_number',
            field=models.PositiveSmallIntegerField(),
        ),
        migrations.AlterField(
            model_name='salesperson',
            name='employee_number',
            field=models.PositiveSmallIntegerField(),
        ),
    ]
