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


/*

function init () {
    // Создаем модель мультимаршрута.
    var multiRouteModel = new ymaps.multiRouter.MultiRouteModel([
           [56.2573467892592, 43.8555007018054],
            [56.2649205552385, 43.8527899499963]
        ], {
            // Путевые точки можно перетаскивать.
            // Маршрут при этом будет перестраиваться.
            wayPointDraggable: true,
            boundsAutoApply: true
        }),

        // Создаём выпадающий список для выбора типа маmaршрута.
        routeTypeSelector = new ymaps.control.ListBox({
            data: {
                content: 'Как добраться'
            },
            items: [
                new ymaps.control.ListBoxItem({data: {content: "Авто"}}),
                new ymaps.control.ListBoxItem({data: {content: "Общественным транспортом"},state: {selected: true}}),
                new ymaps.control.ListBoxItem({data: {content: "Пешком"}})
            ],
            options: {
                itemSelectOnClick: true
            }
        }),
        // Получаем прямые ссылки на пункты списка.
        autoRouteItem = routeTypeSelector.get(1),
        masstransitRouteItem = routeTypeSelector.get(0),
        pedestrianRouteItem = routeTypeSelector.get(2);

    // Подписываемся на события нажатия на пункты выпадающего списка.
    masstransitRouteItem.events.add('click', function (e) { changeRoutingMode('masstransit', e.get('target')); });
    autoRouteItem.events.add('click', function (e) { changeRoutingMode('auto', e.get('target')); });
    pedestrianRouteItem.events.add('click', function (e) { changeRoutingMode('pedestrian', e.get('target')); });
    //changeRoutingMode('masstransit', e.get('target'));
    ymaps.modules.require([
        'MultiRouteCustomView'
    ], function (MultiRouteCustomView) {
        // Создаем экземпляр текстового отображения модели мультимаршрута.
        // см. файл custom_view.js
        new MultiRouteCustomView(multiRouteModel);
    });

    // Создаем карту с добавленной на нее кнопкой.
    var myMap = new ymaps.Map('map', {
            center: [55.750625, 37.626],
            zoom: 7,
            controls: [routeTypeSelector]
        }, {
            buttonMaxWidth: 300
        }),

        // Создаем на основе существующей модели мультимаршрут.
        multiRoute = new ymaps.multiRouter.MultiRoute(multiRouteModel, {
            // Путевые точки можно перетаскивать.
            // Маршрут при этом будет перестраиваться.
            wayPointDraggable: true,
            boundsAutoApply: true
        });

    // Добавляем мультимаршрут на карту.
    myMap.geoObjects.add(multiRoute);

    multiRouteModel.setParams({ routingMode: 'masstransit' }, true);
    function changeRoutingMode(routingMode, targetItem) {
        multiRouteModel.setParams({ routingMode: 'masstransit' }, true);

        // Отменяем выбор элементов.
        autoRouteItem.deselect();
        masstransitRouteItem.deselect();
        pedestrianRouteItem.deselect();

        // Выбираем элемент и закрываем список.
        targetItem.select();
        routeTypeSelector.collapse();
    }

}

ymaps.ready(init);
*/