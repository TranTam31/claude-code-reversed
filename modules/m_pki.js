// Module: pKi (lines 167312-167334)
  var pKi = S(() => {
    Aj();
    tH();
    ENe();
    vj();
    C7c();
    l8();
    P6e = Og("AzurePowerShellCredential");
    ((I7c = {
      login: "Run Connect-AzAccount to login",
      installed:
        "The specified module 'Az.Accounts' with version '2.2.0' was not loaded because no valid module file was found in any module directory",
    }),
      (uKi = {
        login:
          "Please run 'Connect-AzAccount' from PowerShell to authenticate before using this credential.",
        installed: `The 'Az.Account' module >= 2.2.0 is not installed. Install the Azure Az PowerShell module with: "Install-Module -Name Az -Scope CurrentUser -Repository PSGallery -Force".`,
        troubleshoot:
          "To troubleshoot, visit https://aka.ms/azsdk/js/identity/powershellcredential/troubleshoot.",
      }),
      (dKi = [k7c("pwsh")]));
    if (H7c) dKi.push(k7c("powershell"));
  });
