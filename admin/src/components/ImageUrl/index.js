import React, { useState } from "react";
import { findLast, filter, sortBy } from "lodash";
import {
  TextInput,
  Box,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardAsset,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardBadge,
} from "@strapi/design-system";
import { useIntl } from "react-intl";

const ImageUrl = ({
  name,
  onChange: changeData,
  intlLabel,
  required,
  description,
  disabled,
  value: current = "",
}) => {
  const [value = current, setValue] = useState();
  // {
  //   required && (
  //     <Typography variant="pi" fontWeight="bold" textColor="danger600">
  //       *
  //     </Typography>
  //   );
  // }
  const [error] = useState();
  const { formatMessage } = useIntl();
  return (
    <Stack>
      <div>
        <Typography variant="h1" fontWeight="bold">
          {formatMessage(intlLabel)}
        </Typography>
        {required && (
          <Typography variant="pi" fontWeight="bold" textColor="danger600">
            *
          </Typography>
        )}
      </div>

      <Card style={{ width: "100%" }}>
        <CardBody style={{ "align-items": "flex-end" }}>
          <Box padding={2} background="primary100" style={{ width: "25%" }}>
            <CardAsset src={value} />
          </Box>
          <CardContent paddingLeft={2} style={{ width: "75%" }}>
            <TextInput
              placeholder="This is a content placeholder"
              label="url"
              onChange={(e) => {
                setValue(e.target.value);
                changeData({
                  target: { name, value: e.target.value },
                });
              }}
              value={value}
            ></TextInput>
          </CardContent>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default ImageUrl;
