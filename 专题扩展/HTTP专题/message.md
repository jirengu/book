# 报文

HTTP报文是在HTTP应用程序之间发送的数据块。这些数据块以一些文本形式的`元信息`开头，描述报文的内容及含义，后面跟着可选的数据部分

## 组成

HTTP报文是简单的格式化数据块，没个报文都包含一条来自客户端的请求或者一条来自服务器的响应，由3个部分组成

1. 对报文进行描述的起始行 —— start line
2. 包含属性的首部块 —— header
3. 可选的包含数据的主体部分 —— body

&nbsp;

	HTTP/1.0 200 OK
	content-type: text/plain
	content-length: 19
	
	Hi, I'm a message
	
起始行和首部就是由行分隔的ASCII文本，主题是一个可选的数据块，可能是文本、二进制或者空

## 语法

HTTP报文分为两类

### 请求报文：

向web服务器请求一个动作


	<method><request-URL><version>
	<headers>
	
	<entity-body>

### 响应报文

讲请求结果返回给客户端

	<version><status><reason-phrase>
	<headers>
	
	<entity-body>
	

首部和方法配合，共同决定了服务器和客户端能做什么

## 通用首部

客户端和服务器都可以实用的就是通用首部

|首部   |描述   |
|---|---|
|Connection   |客户端和服务器是否保持连接   |
|Date   |日期，报文创建时间   |
|Update   |给出了发送端可能想要升级使用新版本或协议   |
|Via   |显示了报文经过的中间节点（代理、网关）   |
|Trailer   |如果报文采用分块传输编码方式，可以利用这个首部列出位于报文trailer部分的首部集合   |
|Trailer-Encoding   |告诉接收端对报文采用什么编码格式   |
|Cache-Control   |随报文传送缓存指示   |
|Pragma   |早期的随报文传送指示方式   |

## 请求首部

|首部   |描述   |
|---|---|
|Client-IP   |客户端IP   |
|From   |客户端邮件地址   |
|Host   |接收请求的服务器的主机名和端口号   |
|Referer   |提供了包含当前请求URI的文档的URL，告诉服务器自己来源   |
|User—Agent   |发起请求的客户端应用程序   |
|Accept   |告诉服务器能够发送那些媒体类型   |
|Accept-Charset   |告诉服务器能够发送那些字符集   |
|Accept-Encoding   |告诉服务器能够发送那些编码   |
|Accept-Language   |告诉服务器能够发送那些语言   |
|Expect   |允许客户端列出请求所要求的服务器行为   |
|If-Match   |如果ETag和文档当前ETag匹配，就获取文档   |
|If-Modified-Since   |除非在某个指定日期之后修改过，否则限制这个请求   |
|If-None-Match   |如果ETag和当前文档ETag不符合，获取资源   |
|If-Range   |允许对文档否个范围内的条件请求   |
|If-Unmodified-Since   |在某个指定日期之后没有修改过，否则现在请求   |
|Cookie   |客户端字符串   |

## 响应首部

|首部   |描述   |
|---|---|
|Age   |响应持续时间   |
|Server   |服务器应用软件名称和版本   |
|Allow   |列出了可用的请求方法   |
|Location   |告诉客户端实在在哪里，用于定向   |
|Content-Base   |解析主体中相对URL的基础URL   |
|Content-Encoding   |主体编码格式   |
|Content-Language   |解析主体时适用的语言   |
|Content-Length   |主体的长度或尺寸   |
|Content-Location   |资源实际位置   |
|Content-MD5   |主体的MD5校验和   |
|Content-Range   |在整个资源中此实体部分的字节范围   |
|Content-Type   |主体的MIME   |
|ETag   |主体的实体标记   |
|Expires   | 过期时间  |
|Last-Modified   |实体最后一次修改时间   |
