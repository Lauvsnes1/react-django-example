import json
from utils.render_react_page import render_react_page

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.views.decorators.http import require_http_methods
from django.contrib.gis.geos import Point
from .models import Location
from .models import Item


@csrf_exempt
def add_location(request):
    if request.method == "POST":
        try:

            # Assuming the request body is JSON and contains 'latitude' and 'longitude'
            data = json.loads(request.body)
            print(data)
            latitude = float(data["latitude"])
            longitude = float(data["longitude"])

            # Create a new Location object with a random name (or however you wish to name it)
            location = Location(name="Random Location", geom=Point(longitude, latitude))
            location.save()

            return JsonResponse({"status": "success", "id": location.id}, status=201)
        except (ValueError, KeyError) as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)
    else:
        return JsonResponse(
            {"status": "error", "message": "Only POST requests are allowed"}, status=405
        )


def list_items_view(request):
    items = Item.objects.all().values("id", "name")
    return JsonResponse(list(items), safe=False)


@csrf_exempt  # Temporarily disable CSRF for testing, not recommended for production
@require_http_methods(["POST"])
def create_item_view(request):
    data = json.loads(request.body)
    item = Item(name=data["name"])
    item.save()
    return JsonResponse({"status": "success", "id": item.id}, status=201)


def index_view(request):
    if request.method == "GET":
        todos = [
            {"id": 1, "title": "hello"},
            {"id": 2, "title": "world"},
            {"id": 3, "title": "'\"</script><script>alert(1)</script>"},
        ]
        return render_react_page(request, "todos-index", {"todos": todos})
