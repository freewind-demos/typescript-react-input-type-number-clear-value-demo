TypeScript React Input "type=number" Clear Invalid Value Demo
====================================================

对于`type=number`类型的input，在react中使用有一个问题：即当输入的内容不是一个合法的数字时，`onChange`传给react的实际上是一个空字符串。
在这种情况下，如果我们手动将inputValue的值设为空，不会引起重新render，不会清空其值。

其中有一个办法是使用`useRef`拿到input，调用其`inputRef.current.value = ''`来手动清空，在本demo中演示。


```
npm install
npm run demo
```

It will open page on browser automatically.
