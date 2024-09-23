# Pusha docker image till microk8s registry.

Först måste man enabla addonet registry.
Microk8s enable registry.

Sedan push önskad image, med korrekt tag till registry.

## Exempel

Ryzen-Nvidia-Ubuntu:exp-api $ docker tag exp-api localhost:32000/exp-api:local
Ryzen-Nvidia-Ubuntu:exp-api $ docker push localhost:32000/exp-api:local
The push refers to repository [localhost:32000/exp-api]
2c63c083523f: Pushed 
69552c05b903: Pushed 
06f46531db71: Pushed 
9f049cfa33cf: Pushed 
f73b92460b36: Pushed 
4694231d3331: Pushed 
09c0e9e18fd0: Pushed 
94b0f5987cb7: Pushed 
local: digest: sha256:aa9bbe8fd6c47811b7695d46ea9d70ebaf641f2ebfdf8c3f20dea2381f511f04 size: 1994

## Krav

localhost:32000/<tagnamn>:local

Registriet har port 32000