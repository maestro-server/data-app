from app.services.ruler import Ruler


def updaterIds(data, path):
    last = path[-1]

    if isinstance(last, int):
        last = ".".join(map(str, path))

    if isinstance(last, str) and len(str(data)) == 24:
        data = Ruler.searchID(last, data)

    if isinstance(last, str) and len(str(data)) > 24:
        data = Ruler.searchAt(last, data)

    return data
