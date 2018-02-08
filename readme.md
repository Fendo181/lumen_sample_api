## lumenのAPIを学ぶ。

- [Developing RESTful APIs with Lumen (A PHP Micro-framework)](https://auth0.com/blog/developing-restful-apis-with-lumen/)

## Usage

```
php -S localhost:8000 -t public
```

## Tips

### Miss Migration

マイグレーションで怒られる時がある。

```sh
$php artisan migrate
In Connection.php line 664:
SQLSTATE[HY000] [1045] Access denied for user 'homestead'@'localhost' (using password: YES) (SQL: select * from information_schema.tables where table_schema = homestead and table_name = migrations)
```

これはMySQLに該当するuserとDBが無いために起きてしまった。ので、権限を持っているユーザを作成してDBと該当するtableを作成する。


今いるユーザを確認する。
`select User from user`

```
user mysql

mysql> select User from user;
+---------------+
| User          |
+---------------+
| mysql.session |
| mysql.sys     |
| rails_app     |
| root          |
+---------------+
4 rows in set (0.00 sec)
```

`.env`の設定に合わせてユーザを作成する。

```
create databses homestead;
```

`homsetead`DBに権限を持ったユーザを作成する。

```
grant all on *.* to 'homestead'@localhost;
```

作成したuserとhostを確認する。

```
select Host, User from mysql.user;

+-----------+---------------+
| Host      | User          |
+-----------+---------------+
| localhost | homestead     |
| localhost | mysql.session |
| localhost | mysql.sys     |
| localhost | rails_app     |
| localhost | root          |
+-----------+---------------+
```

#### `FatalThrowableError`が返ってくる時の対応方法

`bootstrap\app.php`のコード内に

```
// $app->withEloquent();
```
があるので、こちらのコメントアウトを外す

```
$app->withEloquent();
```


## License

The Lumen framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
