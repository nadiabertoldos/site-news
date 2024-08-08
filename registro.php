<?php 
$u = filter_input(INPUT_POST, "usuario");
$s = filter_input(INPUT_POST, "senha");

if ($u == "Winx" && $s == "1231234") {
	header("location:http://www.uol.com.br");
}else{
	?>
	<script language="javascript">
		window.alert("Dados incorretos");
		window.location.href='index.php';
	</script>
<?php
	}
?>