import IndicatorContainer from '@/base-ui/indicator';
import React, { memo, useState } from 'react'
import { TestWrapper } from './style';
const Test = memo(() => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const handleMoveClick = (isRight) => {

        let newIndex = 0;
        if (isRight) {
            if (currentIndex === nums.length - 1) return setCurrentIndex(0);
            newIndex = currentIndex + 1;
        } else {
            if (currentIndex === 0) return setCurrentIndex(nums.length - 1);
            newIndex = currentIndex - 1;
        }
        setCurrentIndex(newIndex);
    }
    // useEffect(() => {
    //     console.log(currentIndex);
    // }, [currentIndex])
    return (
        <TestWrapper>
            <button onClick={e => handleMoveClick(false)}>上一条</button>
            <button onClick={e => handleMoveClick(true)}>下一条</button>
            <div className='testContainer'>
                <IndicatorContainer currentIndex={currentIndex}>
                    {
                        nums.map((item, index) => {
                            return <span className='item' key={index}>{item}</span>
                        })
                    }
                </IndicatorContainer>
            </div>
        </TestWrapper>


    )
})

export default Test