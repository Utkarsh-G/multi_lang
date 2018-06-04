-- compile with: ghc --make basicio
-- run with ./basicio

-- putStrLn is of type: string -> IO()

-- you can check the type in the ghci REPL by :t <funcname>

main = do
    putStrLn "hello, what's your name?"
    name <- getLine
    putStrLn ("Hey " ++ name ++ ", you rock!")

-- main is the entry point for compiled programs (quite like in c/c++)

-- "do" isn't a loop, it turns haskell into imperative for a bit
-- statements in a do block cannot be just "function" (?) or just expressions (?). I think the latter. they all have to specify some kind of action. Like <- or "return"





