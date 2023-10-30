<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $table = $_POST['table'];

    function createTable($value) {
        $html = '<table border="1">';

        $html .= '<tr><th>&times;</th>';
        for ($i = 1; $i <= $value; $i++) {
            $html .= "<th>$i</th>";
        }
        $html .= '</tr>';

        for ($i = 1; $i <= $value; $i++) {
            $html .= "<tr><th>$i</th>";
            for ($j = 1; $j <= $value; $j++) {
                $result = $i * $j;
                $html .= "<td>$result</td>";
            }
            $html .= '</tr>';
        }

        $html .= '</table>';

        return $html;
    }

    echo createTable($table);
} else {
    echo "Please submit the form to generate the multiplication table.";
}
?>
