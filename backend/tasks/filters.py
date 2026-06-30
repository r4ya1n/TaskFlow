from django_filters import CharFilter, FilterSet
from .models import Task

class TaskFilter(FilterSet):
    status = CharFilter()
    priority = CharFilter()
    title = CharFilter(field_name='title', lookup_expr='icontains')
    description = CharFilter(field_name='description', lookup_expr='icontains')
    
    tags = CharFilter(method='filter_tags')

    def filter_tags(self, queryset, value):
        tag_names = value.split(',')

        for tag in tag_names:
            queryset = queryset.filter(tags__name__iexact=tag.strip())

        return queryset

    class Meta:
        model = Task
        fields = []