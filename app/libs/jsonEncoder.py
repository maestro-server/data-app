import datetime
import json
from bson import ObjectId, timestamp
from app.libs.logger import logger

class DateTimeEncoder(json.JSONEncoder):
    def default(self, obj):
        val = None

        if isinstance(obj, ObjectId):
            val = str(obj)

        if isinstance(obj, timestamp.Timestamp):
            val = str(obj)

        if isinstance(obj, (datetime.datetime, datetime.date, datetime.time)):
            val = obj.isoformat()

        if isinstance(obj, datetime.timedelta):
            val = (datetime.datetime.min + obj).time().isoformat()

        if isinstance(obj, (bytes, bytearray)):
            try:
                val = obj.decode('utf-8')
            except Exception as err:
                logger.warning("==================================> Decode is not utf-8")
                return

        if val is None:
            val = json.JSONEncoder.default(self, obj)

        return val
