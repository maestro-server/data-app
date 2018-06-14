from .model import Model


class FlavorsPublic(Model):
    def __init__(self, flavorId=None):
        super().__init__(flavorId, 'flavors-public')
