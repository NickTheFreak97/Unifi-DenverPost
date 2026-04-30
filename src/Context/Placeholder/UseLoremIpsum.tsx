import type { AnyChildren } from '@/types/AnyChildren';
import { LoremIpsum } from 'lorem-ipsum';
import React, { useCallback, useContext, createContext } from 'react';

const LoremIpsumContext = createContext<((overrides?: Partial<LoremIpsumContextProps>) => string) | null>(null);

interface LoremIpsumContextProps extends AnyChildren {
    minWords: number,
    maxWords: number
}

const LoremIpsumContextProvider: React.FC<LoremIpsumContextProps> = ({ minWords, maxWords, ...rest }) => {
    const generateText = useCallback(
        (overrides: Partial<LoremIpsumContextProps> = {}) => {
            const lorem = new LoremIpsum({
                wordsPerSentence: {
                    min: overrides.minWords ?? minWords,
                    max: overrides.maxWords ?? maxWords
                }   
            })

            return lorem.generateSentences(1);
        }, [minWords, maxWords]
    )

    return (
        <LoremIpsumContext.Provider value={generateText}>
            {rest.children}
        </LoremIpsumContext.Provider>
    )
}

export const useLoremIpsum = () => {
    let loremContext = useContext(LoremIpsumContext);

    if (!loremContext) {
        throw new Error("LoremIpsum context used outside of LoremIpsumContextProvider. This is an error.")
    }

    return loremContext;
}

export default LoremIpsumContextProvider;
