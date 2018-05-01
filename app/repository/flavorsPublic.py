
from .model import Model

class FlavorsPublic(Model):

    def __init__(self, id=None):
        super().__init__(id, 'flavors-public')
