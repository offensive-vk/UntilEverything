# **What is PHP** ?

PHP is a general-purpose scripting language geared towards web development.It was originally created by Danish-Canadian programmer *Rasmus Lerdorf* in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group. PHP was originally an abbreviation of Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.

- Paradigm - Multi-paradigm: imperative, functional, object-oriented, procedural, reflective
- Designed by - **Rasmus Lerdorf**
- Developer(s) - The PHP Development Team, Zend Technologies, PHP Foundation
- First appeared - 8 June 1995; 28 years ago
- Typing discipline - Dynamic, weak, gradual
- Implementation language - C (primarily; some components C++)
- OS - Unix-like, Windows, macOS, IBM i, OpenVMS
- License dual licensed GNU General Public License version 2 or any later version and PHP License for PHP versions 3.0 or earlier. Only PHP License (most of Zend engine under Zend Engine License) for 3.01x and later versions.
- Filename extensions - .php, .phar, .phtml, .pht, .phps
- Official Website - <https://www.php.net>
- Influenced by - Perl, C, C++, Java, Tcl, JavaScript
- Influenced - Hack, JSP, ASP, **React JS**.

## Key features of PHP:

> Server-Side Scripting: PHP is primarily used for server-side scripting, meaning that PHP code is executed on the server before the resulting HTML is sent to the client's browser. This allows for dynamic content generation and interaction with databases and other server-side resources.

> Embedding in HTML: PHP code can be embedded directly within HTML, allowing developers to mix PHP code and HTML markup seamlessly within the same file. This makes it easy to create dynamic web pages with PHP.

> Database Integration: PHP has extensive support for interacting with databases, including MySQL, PostgreSQL, SQLite, and others. This makes it well-suited for building database-driven web applications.

> Cross-Platform Compatibility: PHP runs on various platforms, including Windows, Linux, macOS, and others. It is compatible with most web servers, including Apache, Nginx, and Microsoft IIS.

> Open Source: PHP is an open-source language, meaning that its source code is freely available and can be modified and distributed by anyone. This has contributed to its widespread adoption and continuous improvement through community contributions.

> Extensive Library Support: PHP has a vast ecosystem of libraries and frameworks that provide additional functionality and streamline development for various purposes, such as content management systems (e.g., WordPress, Joomla), e-commerce platforms (e.g., Magento, WooCommerce), and web application frameworks (e.g., Laravel, Symfony).

> Ease of Learning and Deployment: PHP is relatively easy to learn, especially for beginners with prior experience in HTML and CSS. Additionally, deploying PHP applications is straightforward, as most web hosting providers support PHP out of the box.

## **PHP** 8

PHP 8 was released on 26 November 2020, and is currently the second-most used PHP major version. PHP 8 is a major version and has breaking changes from previous versions.New features and notable changes include:

Just-in-time compilation
Just-in-time compilation is supported in PHP 8.

PHP 8's JIT compiler can provide substantial performance improvements for some use cases, while PHP developer Nikita Popov stated that the performance improvements for most websites will be less substantial than the upgrade from PHP 5 to PHP 7. Substantial improvements are expected more for mathematical-type operations than for common web-development use cases. Additionally, the JIT compiler provides the future potential to move some code from C to PHP, due to the performance improvements for some use cases.

Addition of the match expression
Main article: PHP syntax and semantics § Match expression
PHP 8 introduced the match expression. The match expression is conceptually similar to a switch statement and is more compact for some use cases.Because match is an expression, its result can be assigned to a variable or returned from a function.

Type changes and additions
PHP 8 introduced union types, a new static return type, and a new mixed type.

"Attributes", often referred to as "annotations" in other programming languages, were added in PHP 8, which allow metadata to be added to classes.

throw was changed from being a statement to being an expression. This allows exceptions to be thrown in places that were not previously possible.

Syntax changes and additions
PHP 8 includes changes to allow alternate, more concise, or more consistent syntaxes in a number of scenarios. For example, the nullsafe operator is similar to the null coalescing operator ??, but used when calling methods.The following code snippet will not throw an error if getBirthday() returns null:

```php
$human_readable_date = $user->getBirthday()?->diffForHumans();
```

Constructor property promotion has been added as "syntactic sugar," allowing class properties to be set automatically when parameters are passed into a class constructor. This reduces the amount of boilerplate code that must be written.

Other minor changes include support for use of ::class on objects, which serves as an alternative for the use of get_class(); non-capturing catches in try-catch blocks; variable syntax tweaks to resolve inconsistencies; support for named arguments; and support for trailing commas in parameter lists, which adds consistency with support for trailing commas in other contexts, such as in arrays.

***

<p align="center">
  <i>&copy; <a href="https://github.com/offensive-vk/">Vedansh </a> 2023 - Present</i><br>
  <i>Licensed under <a href="https://github.com/offensive-vk/UntilEverything#CC0-1.0-1-ov-file">CC0-1.0</a></i><br>
  <a href="https://github.com/npm-run-test"><img src="https://i.ibb.co/4KtpYxb/octocat-clean-mini.png" /></a><br>
  <kbd>Thanks for visiting :)</kbd>
</p>
