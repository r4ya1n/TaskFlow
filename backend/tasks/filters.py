from django_filters import CharFilter, FilterSet, ChoiceFilter
from .models import Task, Status, Priority

class TaskFilter(FilterSet):
    status = ChoiceFilter(choices=Status.choices)
    priority = ChoiceFilter(choices=Priority.choices)
    title = CharFilter(field_name='title', lookup_expr='icontains')
    description = CharFilter(field_name='description', lookup_expr='icontains')
    tags = CharFilter(method='filter_tags')

    def filter_tags(self, queryset, _, value):
        tag_names = value.split(',')
        for tag in tag_names:
            queryset = queryset.filter(tags__name__iexact=tag.strip())

        return queryset

    class Meta:
        model = Task
        fields = []