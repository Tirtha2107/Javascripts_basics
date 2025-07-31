# import streamlit as st
# import pandas as pd
# import altair as alt

# # Set the title of the Streamlit application
# st.title("Disaster Impact Trends in India (2020-2025)")

# st.write("""
# This application visualizes disaster impact data from the provided CSV file.
# You can select different metrics to see their trends over the years.
# """)

# # Load the dataset
# # Ensure the file 'disasterIND .csv' is in the same directory as your Streamlit app
# # or provide the full path to the file.
# try:
#     df = pd.read_csv("disasterIND .csv")
#     st.success("Dataset loaded successfully!")
# except FileNotFoundError:
#     st.error("Error: 'disasterIND .csv' not found. Please ensure the file is in the correct directory.")
#     st.stop() # Stop the app if the file is not found

# # --- Data Preprocessing ---
# # Convert 'Start Year' to integer, handling potential NaNs if any
# df['Start Year'] = pd.to_numeric(df['Start Year'], errors='coerce').astype('Int64')

# # Filter data for the requested range 2020-2025
# df_filtered = df[(df['Start Year'] >= 2020) & (df['Start Year'] <= 2025)].copy()

# if df_filtered.empty:
#     st.warning("No data available for the years 2020-2025 in the provided CSV.")
#     st.stop()

# # Define the numerical columns for plotting
# numerical_cols = ['Total Deaths', 'No. Injured', 'No. Affected', 'Total Affected']

# # Ensure numerical columns are numeric, coercing errors to NaN and filling with 0 for aggregation
# for col in numerical_cols:
#     df_filtered[col] = pd.to_numeric(df_filtered[col], errors='coerce').fillna(0)

# # Group data by 'Start Year' and sum the numerical columns
# df_yearly_summary = df_filtered.groupby('Start Year')[numerical_cols].sum().reset_index()

# # --- Streamlit UI for Metric Selection ---
# selected_metric = st.selectbox(
#     "Select a metric to visualize:",
#     numerical_cols
# )

# # --- Create the Line Graph using Altair ---
# if selected_metric:
#     st.subheader(f"Trend of {selected_metric} by Year")

#     # Create the line chart
#     chart = alt.Chart(df_yearly_summary).mark_line(point=True).encode(
#         x=alt.X('Start Year:O', title='Year'), # 'O' for ordinal to treat years as discrete categories
#         y=alt.Y(selected_metric, title=selected_metric),
#         tooltip=['Start Year', selected_metric]
#     ).properties(
#         title=f'{selected_metric} in India (2020-2025)'
#     ).interactive() # Make the chart interactive for zooming and panning

#     st.altair_chart(chart, use_container_width=True)

#     st.write(f"Data for '{selected_metric}' (2020-2025):")
#     st.dataframe(df_yearly_summary[['Start Year', selected_metric]])

# st.markdown("---")
# st.info("Data source: disasterIND .csv")


import streamlit as st
import pandas as pd
import altair as alt

# Set the title of the Streamlit application
st.title("Disaster Impact Trends in India (2020-2025)")

st.write("""
This application visualizes disaster impact data from the provided CSV file.
You can select different metrics to see their trends over the years.
""")

# Load the dataset
# Ensure the file 'disasterIND .csv' is in the same directory as your Streamlit app
# or provide the full path to the file.
try:
    df = pd.read_csv("disasterIND .csv")
    st.success("Dataset loaded successfully!")
except FileNotFoundError:
    st.error("Error: 'disasterIND .csv' not found. Please ensure the file is in the correct directory.")
    st.stop() # Stop the app if the file is not found

# --- Data Preprocessing ---
# Convert 'Start Year' to integer, handling potential NaNs if any
df['Start Year'] = pd.to_numeric(df['Start Year'], errors='coerce').astype('Int64')

# Filter data for the requested range 2020-2025
df_filtered = df[(df['Start Year'] >= 2020) & (df['Start Year'] <= 2025)].copy()

if df_filtered.empty:
    st.warning("No data available for the years 2020-2025 in the provided CSV.")
    st.stop()

# Define the numerical columns for plotting
numerical_cols = ['Total Deaths', 'No. Injured', 'No. Affected', 'Total Affected']

# Ensure numerical columns are numeric, coercing errors to NaN and filling with 0 for aggregation
for col in numerical_cols:
    df_filtered[col] = pd.to_numeric(df_filtered[col], errors='coerce').fillna(0)

# Group data by 'Start Year' and sum the numerical columns for the line chart
df_yearly_summary = df_filtered.groupby('Start Year')[numerical_cols].sum().reset_index()

# --- Streamlit UI for Metric Selection (Line Chart) ---
st.header("Line Graph: Yearly Trends")
selected_metric = st.selectbox(
    "Select a metric to visualize for the line graph:",
    numerical_cols
)

# --- Create the Line Graph using Altair ---
if selected_metric:
    st.subheader(f"Trend of {selected_metric} by Year")

    # Create the line chart
    chart = alt.Chart(df_yearly_summary).mark_line(point=True).encode(
        x=alt.X('Start Year:O', title='Year'), # 'O' for ordinal to treat years as discrete categories
        y=alt.Y(selected_metric, title=selected_metric),
        tooltip=['Start Year', selected_metric]
    ).properties(
        title=f'{selected_metric} in India (2020-2025)'
    ).interactive() # Make the chart interactive for zooming and panning

    st.altair_chart(chart, use_container_width=True)

    st.write(f"Data for '{selected_metric}' (2020-2025):")
    st.dataframe(df_yearly_summary[['Start Year', selected_metric]])

st.markdown("---")

# --- Pie Chart Section ---
st.header("Pie Chart: Disaster Type Distribution")

# Get unique years for the pie chart selection
available_years = sorted(df_filtered['Start Year'].unique().tolist())
if not available_years:
    st.warning("No years available for pie chart visualization.")
else:
    selected_year_for_pie = st.selectbox(
        "Select a year for the pie chart:",
        available_years
    )

    # Filter data for the selected year for the pie chart
    df_pie_year = df_filtered[df_filtered['Start Year'] == selected_year_for_pie].copy()

    # Define categorical columns for the pie chart
    categorical_cols = ['Disaster Type', 'Disaster Subtype']

    selected_category_for_pie = st.selectbox(
        "Select a category to visualize in the pie chart:",
        categorical_cols
    )

    if not df_pie_year.empty and selected_category_for_pie:
        # Group by the selected category and sum 'Total Affected' for slice size
        # Fill NaN in 'Total Affected' with 0 before summing
        df_pie_data = df_pie_year.groupby(selected_category_for_pie)['Total Affected'].sum().reset_index()

        if df_pie_data.empty or df_pie_data['Total Affected'].sum() == 0:
            st.warning(f"No 'Total Affected' data for '{selected_category_for_pie}' in {selected_year_for_pie} to create a meaningful pie chart.")
        else:
            st.subheader(f"Distribution of {selected_category_for_pie} in {selected_year_for_pie}")

            # Create the pie chart
            pie_chart = alt.Chart(df_pie_data).mark_arc(outerRadius=120).encode(
                theta=alt.Theta(field="Total Affected", type="quantitative"),
                color=alt.Color(field=selected_category_for_pie, type="nominal", title=selected_category_for_pie),
                order=alt.Order(field="Total Affected", sort="descending"),
                tooltip=[selected_category_for_pie, 'Total Affected', alt.Tooltip('Total Affected', format='.1f', title='Total Affected')]
            ).properties(
                title=f'{selected_category_for_pie} Distribution in {selected_year_for_pie}'
            )

            # Add text labels to the pie chart
            text = pie_chart.mark_text(radius=140).encode(
                text=alt.Text(selected_category_for_pie),
                order=alt.Order(field="Total Affected", sort="descending"),
                color=alt.value("black") # Set text color to black for better visibility
            )

            st.altair_chart(pie_chart + text, use_container_width=True)
            st.write(f"Data for '{selected_category_for_pie}' in {selected_year_for_pie}:")
            st.dataframe(df_pie_data)
    else:
        st.info("Please select a year and a category to display the pie chart.")


st.markdown("---")
st.info("Data source: disasterIND .csv")
