# MarkDown基础
下面是一些MarkDown中常用的基本写法

## 基本写法

### 段落
段落使用一个回车换行生成.
 

### 标题
标题生成使用下面的方式
> 
>      # The largest heading (an <h1tag)
>      ## The second largest heading (an <h2tag)
>       …
>      ###### The 6th largest heading (an <h6tag)
> 

### 块引用
In the words of Abraham Lincoln:

> Pardon my french

上面的块引用是下面这行代码生成的
`> Pardon my french`

### 文本样式
#### 斜体
*This text will be italic*
由下面代码生成:    


> 	 *This text will be italic*

#### 粗体

**This text will be bold**
由下面代码生成:        


> 	**This text will be bold**

#### 删除线
~~Mistaken text.~~
有下面代码生成:
>     ~~Mistaken text.~~



#### 样式嵌套
**Everyone _must_ attend the meeting at 5 o'clock today.**
上面这句话可以由下面几种方式生成

>     **Everyone *must* attend the meeting at 5 o'clock today.**
>     **Everyone _must_ attend the meeting at 5 o'clock today.**
>     __Everyone *must* attend the meeting at 5 o'clock today.__
>     __Everyone _must_ attend the meeting at 5 o'clock today.__

*Everyone **must** attend the meeting at 5 o'clock today.*
同样,上面这句话可以由下面这几种方式生成
>     *Everyone **must** attend the meeting at 5 o'clock today.*
>     *Everyone __must__ attend the meeting at 5 o'clock today.*
>     _Everyone **must** attend the meeting at 5 o'clock today._
>     _Everyone __must__ attend the meeting at 5 o'clock today._


### 列表
#### 无序列表
* Item
* Item
* Item
这种可以由下列两种代码生成
>     * Item
>     * Item
>     * Item
>     
>     - Item
>     - Item
>     - Item

#### 有序列列表
1. Item 1
2. Item 2
3. Item 3
这种有下列代码生成
>     1. Item 1
>     2. Item 2
>     3. Item 3

#### 列表嵌套
1. Item 1
  1. A corollary to the above item.
  2. Yet another point to consider.
2. Item 2
  * A corollary that does not need to be ordered.
    * This is indented four spaces, because it's two spaces further than the item above.
    * You might want to consider making a new list.
3. Item 3
上面这段嵌套的列表 有下列代码 生成
> 1. Item 1
>   1. A corollary to the above item.
>   2. Yet another point to consider.
> 2. Item 2
>   * A corollary that does not need to be ordered.
> * This is indented four spaces, because it's two spaces further than the item above.
> * You might want to consider making a new list.
> 3. Item 3


### 多行文字块
你可以使用```来写一个多行文字块

```
x = 0
x = 2 + 2
what is x
```
有下列代码生成
>     ```
>     x = 0
>     x = 2 + 2
>     what is x
>     ```


### 链接
[Visit GitHub!](https://www.github.com)
上面这个链接使用下列代码生成
>     [Visit GitHub!](https://www.github.com)

使用[]书写链接文字,紧跟其后的()书写链接地址.


如果直接书写一个链接地址,则使用这个地址本身作为链接文字
eg:  http://example.com
由 这行代码直接生成
> `http://example.com`



## 表格

### 

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |


| Name | Description          |
| ------------- | ----------- |
| Help      | ~~Display the~~ help window.|
| Close     | _Closes_ a window     |


| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |