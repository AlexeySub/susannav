function init () {
    // Создаем модель мультимаршрута.
    var multiRouteModel = new ymaps.multiRouter.MultiRouteModel([
           [56.2573467892592, 43.8555007018054],
            [56.2649205552385, 43.8527899499963]
        ]);

    ymaps.modules.require([
        'MultiRouteCustomView'
    ], function (MultiRouteCustomView) {
        // Создаем экземпляр текстового отображения модели мультимаршрута.
        // см. файл custom_view.js
        new MultiRouteCustomView(multiRouteModel);
    });

    multiRouteModel.setParams({ routingMode: 'masstransit' }, true);


}

ymaps.ready(init);

