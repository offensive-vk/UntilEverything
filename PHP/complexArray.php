<?php 

//create 4*4 multidimensional array

$a=array(array(1,2,3,4),
		array(1,2,3,4),
		array(1,2,3,4),
		array(1,2,3,4));
		
$b=array(array(1,2,3,4),
		array(1,2,3,4),
		array(1,2,3,4),
		array(1,2,3,4));
		
//print array

echo "Array a :<br><br>";

printMatrix($a);

echo "<br>Array b :<br><br>";

printMatrix($b);

		
//add two array

echo "<br>Array c = a + b :<br><br>";

addMatrix($a,$b);

//user defined function to print multidimensional array

function printMatrix($matrix)
	{
		for($i=0;$i<count($matrix);$i++)
			{
				for($j=0;$j<count($matrix);$j++)
					{
						echo $matrix[$i][$j]." ";
					}
				echo "\n";
			}
	}
	
//user defined function to add multidimensional array

function addMatrix($matrix_1,$matrix_2)
	{
		for($i=0;$i<count($matrix_1);$i++)
			{
				for($j=0;$j<count($matrix_1);$j++)
					{
						$c[$i][$j]=$matrix_1[$i][$j]+$matrix_2[$i][$j];
						echo $c[$i][$j]." ";
					}
				echo "\n";
			}
	}

?>