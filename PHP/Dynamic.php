<?php

// Dynamic HTML generation function
function generate_dynamic_html($title, $content) {
    $html = "
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>$title</title>
        </head>
        <body>
            <h1>$title</h1>
            <div>
                $content
            </div>
        </body>
        </html>
    ";

    return $html;
}

// Sample data
$page_title = "Dynamic HTML Page";
$page_content = "
    <p>This is dynamically generated HTML content.</p>
    <p>Current date and time: " . date('Y-m-d H:i:s') . "</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
";

// Generate HTML dynamically
$dynamic_html = generate_dynamic_html($page_title, $page_content);

// Output dynamic HTML
echo $dynamic_html;

?>
