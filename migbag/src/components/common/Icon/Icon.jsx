import React from "react";

const Icon = ({name, size = 24, color = 'black'}) => {
    switch(name) {
        case 'arrow':
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
                    
                </svg>
            )
    }
}