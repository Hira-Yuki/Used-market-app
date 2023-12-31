'use client'

import Button from '@/app/components/Button'
import Container from '@/app/components/Container'
import Heading from '@/app/components/Heading'
import ImageUpload from '@/app/components/ImageUpload'
import Input from '@/app/components/Input'
import { categories } from '@/app/components/categories/Categories'
import CategoryInput from '@/app/components/categories/CategoryInput'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

const ProductUploadPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, setValue, watch, formState: { errors, }, reset } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      discription: "",
      category: "",
      latitude: 33.5563,
      longitude: 126.79581,
      imageSrc: "",
      price: 1
    }

  })

  const imageSrc = watch('imageSrc')
  const category = watch('category')

  const latitude = watch('latitude')
  const longitude = watch('longitude')

  // 클라이언트 사이드에서 랜더링하기 위해 다이나믹을 이용해서 임포트
  const KakaoMap = dynamic(() => import('../../components/KakaoMap'), {
    ssr: false
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {

  }

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value)
  }

  return (
    <Container>
      <div className='max-w-screen-lg mx-auto'>
        <form
          className=' flex flex-col gap-8'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Heading
            title="Product Upload"
            subtitle="upload your product"
          />
          <ImageUpload
            onChange={(value) => setCustomValue('imageSrc', value)}
            value={imageSrc}
          />
          <Input
            id="title"
            label='Title'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id="discription"
            label='Discription'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id="price"
            label='Price'
            formatPrice
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
            {/* 카테고리 영역 */}
            {categories.map((item) => (
              <div key={item.label} className='col-span-1'>
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.path}
                  label={item.label}
                  icon={item.icon}
                  path={item.path}
                />
              </div>
            ))}
          </div>
          <hr />
          {/* 지도 영역 */}
          <KakaoMap setCustomValue={setCustomValue} latitude={latitude} longitude={longitude}/>

          <Button label='상품 생성하기' />
        </form>
      </div>
    </Container>
  )
}

export default ProductUploadPage