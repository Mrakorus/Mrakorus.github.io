<?php
$fget = "";
foreach ($_GET as $key => $value) {
	$fget .= $key . "=" . $value . "|";
}
$fget = rtrim($fget, "|");
file_put_contents("name/" . $_GET["name"] . ".txt", $fget);
file_put_contents("name/debug.txt", $fget . date("H:i:s:u") . "\n ||| \n", FILE_APPEND);
$ffile = file_get_contents("name/" . $_GET["opponent"] . ".txt");
$tmass = explode("|", $ffile);
$massoffile = [];
$ttmass = [];
$tttm = [];
foreach ($tmass as $key => $value) {
	$ttmass = explode("=", $value);
	$tttm = explode(",", $ttmass[1]);
	if(isset($tttm[1])){
		$ttmass[1] = explode(",", $ttmass[1]);
		foreach ($ttmass[1] as $kk => $vv) {
			$ttmass[1][$kk] = (int)$vv;
		}
	}
	$massoffile[$ttmass[0]] = $ttmass[1];
}
$massoffile["long"]=(int)$massoffile["long"];
$massoffile["x"]=(int)$massoffile["x"];
$massoffile["y"]=(int)$massoffile["y"];
echo json_encode($massoffile);

?>
