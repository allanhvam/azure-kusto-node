// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const a = {
    "Tables": [
        {
            "TableName": "Table_0",
            "Columns": [
                {
                    "ColumnName": "Count",
                    "DataType": "Int64"
                }
            ],
            "Rows": [[0]]
        },
        {
            "TableName": "Table_1",
            "Columns": [
                {
                    "ColumnName": "Value",
                    "DataType": "String"
                }
            ],
            "Rows": [
                [
                    "{\"Visualization\":null,\"Title\":null,\"XColumn\":null,\"Series\":null,\"YColumns\":null,\"AnomalyColumns\":null,\"XTitle\":null,\"YTitle\":null,\"XAxis\":null,\"YAxis\":null,\"Legend\":null,\"YSplit\":null,\"Accumulate\":false,\"IsQuerySorted\":false,\"Kind\":null,\"Ymin\":\"NaN\",\"Ymax\":\"NaN\"}"
                ]
            ]
        },
        {
            "TableName": "Table_2",
            "Columns": [
                {
                    "ColumnName": "Timestamp",
                    "DataType": "DateTime"
                },
                {
                    "ColumnName": "Severity",
                    "DataType": "Int32"
                },
                {
                    "ColumnName": "SeverityName",
                    "DataType": "String"
                },
                {
                    "ColumnName": "StatusCode",
                    "DataType": "Int32"
                },
                {
                    "ColumnName": "StatusDescription",
                    "DataType": "String"
                },
                {
                    "ColumnName": "Count",
                    "DataType": "Int32"
                },
                {
                    "ColumnName": "RequestId",
                    "DataType": "Guid"
                },
                {
                    "ColumnName": "ActivityId",
                    "DataType": "Guid"
                },
                {
                    "ColumnName": "SubActivityId",
                    "DataType": "Guid"
                },
                {
                    "ColumnName": "ClientActivityId",
                    "DataType": "String"
                }
            ],
            "Rows": [
                [
                    "2019-04-16T11:43:25.9480738Z",
                    4,
                    "Info",
                    0,
                    "Query completed successfully",
                    1,
                    "3ce2a149-e231-4177-ab4d-747d8be89282",
                    "3ce2a149-e231-4177-ab4d-747d8be89282",
                    "9d3b7f72-5e24-4519-9624-af40cac126da",
                    "KNC.execute;e87a17c1-70d1-42e5-ac91-9ea899cb5331"
                ],
                [
                    "2019-04-16T11:43:25.9480738Z",
                    6,
                    "Stats",
                    0,
                    "{\"ExecutionTime\":0.2187526,\"resource_usage\":{\"cache\":{\"memory\":{\"hits\":0,\"misses\":0,\"total\":0},\"disk\":{\"hits\":0,\"misses\":0,\"total\":0},\"shards\":{\"hitbytes\":0,\"missbytes\":0,\"bypassbytes\":0}},\"cpu\":{\"user\":\"00:00:00\",\"kernel\":\"00:00:00\",\"total cpu\":\"00:00:00\"},\"memory\":{\"peak_per_node\":16777408}},\"input_dataset_statistics\":{\"extents\":{\"total\":0,\"scanned\":0},\"rows\":{\"total\":0,\"scanned\":0},\"rowstores\":{\"scanned_rows\":0,\"scanned_values_size\":0}},\"dataset_statistics\":[{\"table_row_count\":1,\"table_size\":8}]}",
                    1,
                    "3ce2a149-e231-4177-ab4d-747d8be89282",
                    "3ce2a149-e231-4177-ab4d-747d8be89282",
                    "9d3b7f72-5e24-4519-9624-af40cac126da",
                    "KNC.execute;e87a17c1-70d1-42e5-ac91-9ea899cb5331"
                ]
            ]
        },
        {
            "TableName": "Table_3",
            "Columns": [
                {
                    "ColumnName": "Ordinal",
                    "DataType": "Int64"
                },
                {
                    "ColumnName": "Kind",
                    "DataType": "String"
                },
                {
                    "ColumnName": "Name",
                    "DataType": "String"
                },
                {
                    "ColumnName": "Id",
                    "DataType": "String"
                },
                {
                    "ColumnName": "PrettyName",
                    "DataType": "String"
                }
            ],
            "Rows": [
                [0, "QueryResult", "PrimaryResult", "905602e5-348f-445d-905e-89cd2421bf03", ""],
                [1, "QueryProperties", "@ExtendedProperties", "72a756cf-ccc6-4eb6-94d8-b8f3856b63f5", ""],
                [2, "QueryStatus", "QueryStatus", "00000000-0000-0000-0000-000000000000", ""]
            ]
        }
    ]
}

export default a;