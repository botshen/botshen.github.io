---
lang: zh-CN
title: Ruby简易教程
description: "Ruby简易教程"
---

## 声明类和方法

- 在 ruby 中没有括号，在想要关闭的地方加上 end 即可
- 参数可以不加括号，但是推荐加括号

```ruby
# 声明类
class User
  # 构造方法
  def initialize name
    @name=name
  end
  # 声明实例方法
  def hi target
    p "Hi #{target},I am #{@name}"
  end
end
# 创建一个用户
u1=User.new 'shenxin'
p u1 #=> #<User:0x014362b8 @name="shenxin">
# 调用方法
u1.hi 'ruby' #=> Hi ruby,I am shenxin
```

## 找偶数

- 函数名就是even?

### 版本 1

```ruby
even_numbers [1,2,3,4,5,6].each do |number|
  # ruby 的方法不需要加括号
  if number.even?
  # <<的含义是推进去一个元素
    even_numbers << number
  end
end
```

### 版本 2

```ruby

even_numbers = [1,2,3,4,5,6].select do |number| 
  even_numbers << n if number.even?
end
```

### 版本 3

```ruby

even_numbers = [1,2,3,4,5,6].select do |number|
  n.even?
end
```

### 版本 4

```ruby
even_numbers = [1,2,3,4,5,6].select{|number| number.even?}
```

### 版本 5

- & 表示当前的对象
  
```ruby
even_numbers = [1,2,3,4,5,6].select(&:even?)
```

### 版本 6

- & 表示当前的对象
  
```ruby
even_numbers = [1..6].select(&:even?)
```

### 版本 7

- ! 表示当前的操作很危险会改变原数组

```ruby
even_numbers=(1..6).to_a
even_numbers.select!(&:even?)
```
