import { type MenuLayoutVariant } from "@/modules/admin/layout/AdminMenuLayout";
import { categories } from "@/modules/admin/mock/categories";
import { ingredientData } from "@/modules/admin/mock/ingredient";
import { H4 } from "@/modules/common/components/Typography";
import { type Category } from "@/modules/user/mock/categories";
import styled from "@emotion/styled";
import { Button, Card, Form, Input, InputNumber, Select } from "antd";
import Image from "next/image";
import React, { useState } from "react";

type FieldType = {
  name: string;
  price: number;
  category?: Category;
  ingredients?: string;
  description?: string;
  imageURL?: string;
};

type MenuFormSectionProps = {
  menuLayoutVariant: MenuLayoutVariant;
};

const MenuFormSection: React.FC<MenuFormSectionProps> = ({
  menuLayoutVariant,
}) => {
  const [form] = Form.useForm();
  const [imageURL, setImageURL] = useState<string>(
    "https://source.unsplash.com/random/?food&plate&11",
  );

  if (menuLayoutVariant === "edit") {
    // TODO: get menu data from api then set value to form
  }

  const onFormSubmit = (values: any) => {
    // TODO: send data to api
    console.log(values);
  };

  const onSave = () => {
    form.submit();
  };

  const onCancel = () => {
    // TODO: popup confirm
    // TODO: if no close popup
    // TODO: if yes redirect to menu
  };

  const onDelete = () => {
    // TODO: popup confirm
    // TODO: if no close popup
    // TODO: if yes delete menu redirect to menu
  };

  const title = menuLayoutVariant === "edit" ? "Edit" : "Add";

  return (
    <MenuFormCard
      title={<H4 medium={true}>{title}</H4>}
      bordered={false}
      extra={
        <ButtonGroup>
          <Button type="primary" onClick={onSave}>
            Save
          </Button>
          <Button type="default">Cancel</Button>
          {menuLayoutVariant === "edit" && (
            <Button type="primary" danger>
              Delete
            </Button>
          )}
        </ButtonGroup>
      }
    >
      <MenuFormContainer
        layout="vertical"
        form={form}
        onFinish={onFormSubmit}
        requiredMark="optional"
      >
        <GeneralFormItemsContainer>
          <Form.Item<FieldType>
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input name!" }]}
            style={{ width: "100%" }}
          >
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item<FieldType>
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please input price!" }]}
            style={{ width: "100%" }}
          >
            <InputNumber
              prefix="฿"
              controls={false}
              placeholder="50"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="category"
            label="Category"
            style={{ width: "100%" }}
          >
            <Select allowClear>
              {categories.map((category) => (
                <Select.Option key={category.id} value={category.name}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item<FieldType>
            name="ingredients"
            label="Ingredients"
            style={{ width: "100%" }}
          >
            <Select mode="tags" placeholder="Pork" allowClear>
              {ingredientData.map((ingredient) => (
                <Select.Option key={ingredient.id} value={ingredient.name}>
                  {ingredient.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item<FieldType>
            name="description"
            label="Description"
            style={{ width: "100%", height: "100%" }}
          >
            <Input.TextArea
              placeholder="This menu is very recommended"
              showCount
              maxLength={100}
              size="large"
            />
          </Form.Item>
        </GeneralFormItemsContainer>
        <ImageFormItemsContainer>
          <StyledImage
            src={imageURL}
            alt="Food image"
            width={296}
            height={296}
            unoptimized
          />
          <Form.Item<FieldType>
            name="imageURL"
            label="Image URL"
            style={{ width: "100%" }}
          >
            <Input
              placeholder="Image URL"
              onChange={(e) => {
                if (e.target.value) {
                  setImageURL(e.target.value);
                } else {
                  setImageURL(
                    "https://source.unsplash.com/random/?food&plate&11",
                  );
                }
              }}
            />
          </Form.Item>
        </ImageFormItemsContainer>
      </MenuFormContainer>
    </MenuFormCard>
  );
};

export default MenuFormSection;

const MenuFormCard = styled(Card)`
  flex: 2;
  padding: 0px 24px 24px 24px;
  .ant-card-head {
    padding: 0;
    height: 64px;
  }
  .ant-card-body {
    padding: 0;
    height: calc(100% - 64px);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MenuFormContainer = styled(Form)`
  display: flex;
  padding: 12px 12px 0px 12px;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

const GeneralFormItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 50%;
`;

const ImageFormItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledImage = styled(Image)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;
