function mostrar()
{
 nombreProducto=prompt("Ingrese el nombre de su producto: (alcohol-iac-quat)");
		while (nombreProducto!="alcohol"&&nombreProducto!="iac"&&nombreProducto!="quat")
		{
			nombreProducto=prompt("El producto que usted ingreso no es valido. Ingrese el nombre de su producto: (alcohol-iac-quat)");
		}
}
