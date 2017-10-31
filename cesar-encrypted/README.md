
###Cesar's Encrypted

1. Ask to the user for a password which must include only letters, by using the
   command prompt ().
2. Built a "for" loop from the first element in the array to the last one by
   steps of one, within this execute the  following instructions.
3. Each of the letters that are part of the password is converted in
   ASCII code, for this purpose we use the command "charCodeAt()".
4. In order to encrypt the password we use the following expression
    (x - 65 + 33) % 26 + 65
5. The new value is gotten by the previous formula and it is translate to the
   corresponding associated letter by the command "String.fromCharCode()".
6. Each element of the array is substituted by the new letter as result of the
   encrypted method.
7. Finally, we show the encrypted password.  
