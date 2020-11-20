# Download NuGet.exe
$sourceNugetExe = "https://dist.nuget.org/win-x86-commandline/latest/nuget.exe"
$targetNugetExe = "./nuget.exe"
Remove-Item ./tools -Force -Recurse -ErrorAction Ignore
Invoke-WebRequest $sourceNugetExe -OutFile $targetNugetExe
Set-Alias nuget $targetNugetExe -Scope Global -Verbose

# Download CoreTools
./nuget install  Microsoft.CrmSdk.CoreTools -O ./tools
New-Item `
    -Path ./tools/CoreTools `
    -ItemType "directory"
$coreToolsFolder = Get-ChildItem ./tools `
    | Where-Object { $_.Name -match 'Microsoft.CrmSdk.CoreTools.' } `
    | Select-Object -ExpandProperty Name
Move-Item ./tools/$coreToolsFolder/content/bin/coretools/*.* ./tools/CoreTools
Remove-Item ./tools/$coreToolsFolder -Force -Recurse

# Remove NuGet.exe
Remove-Item nuget.exe