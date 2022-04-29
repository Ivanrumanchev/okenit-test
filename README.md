# okenit-test

Тестовое задание https://docs.google.com/document/d/1yCZM04m4jRYwfpErbDMQgW1w6Yl9sMBPcw9iAotx-iY/edit .

Ссылка на развёрнутую версию проекта https://ivanrumanchev.github.io/okenit-test

Проект состоит из нескольких страниц: главная страница (с пользователями и их постами) и страница с подробным описанием поста (с комментариями). Предусмотрена возможность добавления нового комментария.

Для данных использован api: https://jsonplaceholder.typicode.com.

В проекте используется Vue-router. Обработаны несуществующие пути.

Также используется Vuex. В глобальном состоянии хранятся пользователи, посты, которые фильтруются на стороне сервера, текущий пользователь, текущий пост, а также комментарии к посту.

Для запуска локального сервера необходимо склонировать репозиторий (git clone git@github.com:Ivanrumanchev/okenit-test.git), перейти в директорию и в проект (cd okenit-test/project/), установить зависимости (npm i), запустить локальный сервер (npm run serve).

Для создания продакшн версии необходимо ввести компанду npm run build
