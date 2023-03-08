# Generated by Django 4.0.3 on 2023-03-07 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_remove_appointment_status_delete_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17, unique=True)),
            ],
        ),
        migrations.AlterField(
            model_name='technician',
            name='employee_number',
            field=models.PositiveSmallIntegerField(max_length=10, unique=True),
        ),
    ]
