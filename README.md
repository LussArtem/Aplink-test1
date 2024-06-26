# Тестовое задание - Веб-программист 2024

Мне предложили тестовое задание - разработать калькулятор для внедрения на сайт натяжных потолков.

## Макет -

-   [https://www.figma.com/file/K3HrFG9uFNK9CVsUvH8sI6/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=0%3A1&t=CewDuKxxn6wTbMt1-1

Калькулятор должен производить расчет стоимости натяжных потолков по введенным данным.

Варианты значений:
Площадь помещения - от 10м2
Количество углов - любое положительное число
Фактура потолка - ПВХ, Тканевый
Цвет потолка - Белый, Цветной

Таблица цен:
Фактура и цвет Цена за м2
ПВХ белый 1390 руб
ПВХ цветной 1600 руб
Тканевый белый 2250 руб
Тканевый цветной -

Угол 100 руб

Стоимость потолка рассчитывается по формуле:
Стоимость потолка = Цена за м2 _ Площадь помещения + Цена угла _ Кол-во углов

## Требования к выполнению задания:

-   :white_check_mark: Верстка должна соответствовать макету в Figma, быть адаптивной под любые браузеры и разрешения экрана (HTML5, SCSS)
-   :white_check_mark: Функционал работы калькулятора должен быть реализован на jQuery (3.4.1)
-   :white_check_mark: Стоимость расчета должна меняться динамически при изменении параметров
    -   Будет круто, если:
-   :negative_squared_cross_mark: Реализуешь калькулятор на CMS Modx (для отправки сообщений можно использовать плагины FormIt и AjaxForm)
    -   Творческие задания:
-   :negative_squared_cross_mark: Реализуешь функционал “Добавить комнату”
-   :negative_squared_cross_mark: Реализуешь функционал “Оформить заказ” (по клику открывается модальное окно с полями для ввода имени и номера телефона и кнопкой “Оформить заказ”, по клику на которую письмо отправляется на почту)
-   :negative_squared_cross_mark: Реализуешь функционал “Скачать смету” (по клику скачивается PDF-файл с введенными параметрами и расчетом)

## Срок выполнения задания - 3 дня, результат можно прислать в любом удобном виде. Удачи!

https://aplink-test1.vercel.app/
