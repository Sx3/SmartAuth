$dir = "path/to/folder";
$files = scandir($dir);
$options = "";
foreach($files as $file) {
  if ($file != "." && $file != "..") {
    $options .= "<option value=\"$file\">$file</option>";
  }
}
