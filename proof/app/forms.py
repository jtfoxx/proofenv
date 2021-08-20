from django import forms
from app.models import *


class UserAdminForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(UserAdminForm, self).__init__(*args, **kwargs)
        # Convert string to python list
        if self.instance.role:
            self.initial["role"] = (
                self.instance.role[1:-
                                   1].replace("'", "").replace(" ", "").split(",")
            )

    role = forms.MultipleChoiceField(
        widget=forms.widgets.CheckboxSelectMultiple, choices=ROLES
    )

    class Meta:
        model = Program
        fields = "__all__"


class CategoryAdminForm(forms.ModelForm):
    name = forms.CharField(max_length=100)

    def __init__(self, *args, **kwargs):
        super(CategoryAdminForm, self).__init__(*args, **kwargs)
        # Convert string to python list
        if self.instance.role:
            self.initial["role"] = (
                self.instance.role[1:-
                                   1].replace("'", "").replace(" ", "").split(",")
            )

    role = forms.MultipleChoiceField(
        widget=forms.widgets.CheckboxSelectMultiple, choices=ROLES
    )

    class Meta:
        model = Category
        fields = "__all__"
