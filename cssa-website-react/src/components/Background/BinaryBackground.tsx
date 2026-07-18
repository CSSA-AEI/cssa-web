import React from "react";
import './binary-background.css';

interface BinaryBackgroundProps {
    maxHeight?: string;
}

const rows = [
    '100110110011111111011',
    '111101000011001010001',
    '101001101101011010111',
    '100110110111011011011',
    '100110110011111111011',
    '100110110011111111011',
    '100110110011111111011',
    '100110110011111111011',
    '100110110011111111011',
    '100110110011111111011',
    '100110110011111111011'
];

const BinaryBackground: React.FC<BinaryBackgroundProps> = ({maxHeight}) => {
    return (
        <div 
            className={'binary-numbers'}
            style={maxHeight ? { maxHeight } : undefined}
            aria-hidden="true"
        >
            {rows.map((row, rowIndex) => (
                <div className={'binary-row'} key={rowIndex}>
                    {row.split('').map((digit, digitIndex) => (
                        <div className={'binary-digits'} key={digitIndex}>
                            {digit}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default BinaryBackground;