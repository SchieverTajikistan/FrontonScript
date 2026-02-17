$Output = "frontolScript.js"
$SrcDir = "src"
$PartnersDir = "src\partners"
$Separator = "// *****************************************************************"

# Clear or create the output file
"" | Set-Content -NoNewline $Output

# Main file first
Get-Content "$SrcDir\main.js" | Add-Content $Output

# Then all partner files
$files = Get-ChildItem -Path $PartnersDir -Filter "*.js" | Sort-Object Name

foreach ($file in $files) {
    Add-Content $Output ""
    Add-Content $Output $Separator
    Add-Content $Output ""
    Get-Content $file.FullName | Add-Content $Output
}

Write-Host "Merged into $Output"