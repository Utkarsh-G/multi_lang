-- files. copying from one file to another (without really understanding monads :( )

main = do
    f <- readFile "basicio.in"
    putStrLn f
    writeFile "basicio.out" f

-- write from .in to .out